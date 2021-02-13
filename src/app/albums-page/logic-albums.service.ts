import {Injectable} from '@angular/core';
import {AlbumInterface} from '../shared/interface/albums.interface';

@Injectable({
  providedIn: 'root'
})

export class LogicAlbumsService {
  genre: string;
  quantityLike: number;
  name: string;
  constructor() {}
  saveObject(object: AlbumInterface): void {
    const objects = this.getObjects(this.genre);
    const checkAlbum = this.checkObject(object, objects);
    const quantityLike = this.getQuantityLike();
    if (!checkAlbum) {
      object.like = true;
      this.quantityLike = this.setLike(quantityLike + 1);
      this.setObjectLiked(object.name);
      objects.push(object);
      this.setItemToStorage(this.genre, objects);
    } else {
      object.like = false;
      this.quantityLike = this.setLike(quantityLike - 1);
      const actualAlbums = objects.filter(item => item.name !== checkAlbum.name && item);
      this.setItemToStorage(this.genre, actualAlbums);
    }
  }
  getObjects(genre: string): AlbumInterface[] {
    this.genre = genre;
    const data =  this.getItemFromStorage(`${genre}`);
    const objects: AlbumInterface[] = JSON.parse(data);
    return objects ? objects : [];
  }
  checkObject(object: AlbumInterface, objects: AlbumInterface[]): AlbumInterface {
    return objects.find(item => item.name === object.name && object);
  }
  getQuantityLike(): number {
    const quantityLike = this.getItemFromStorage('quantity-like');
    return quantityLike ? Number(quantityLike) : 0;
  }
  setLike(likes: number): number {
    localStorage.setItem('quantity-like', String(likes));
    return this.getQuantityLike();
  }
  setObjectLiked(name: string): void {
    new Promise( (resolve) => {
      this.name = name;
      const sub = setTimeout(() => {
        this.name = null;
        resolve(sub);
      }, 1000);
    }).then((res: number) => {
      clearTimeout(res);
    });
  }
  searchObjects(search: string, arrObj: AlbumInterface[]): AlbumInterface[] {
    return arrObj
      .reduce((acum, item) => {
        search
          .split('')
          .forEach((str, index) => item.name[index] === str && index === str.split('').length + 1 && acum.push(item));
        return acum;
      } , []);
  }
  getItemFromStorage(key: string): string {
    return localStorage.getItem(`${key}`);
  }
  setItemToStorage(key: string, data): void {
    localStorage.setItem(`${key}`, JSON.stringify(data));
  }
}
