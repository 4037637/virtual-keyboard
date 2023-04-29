import { Key } from './keyboard';
import Listen from './listen'

import {board} from './keyboard';
import {boardRU} from './keyboard';

interface KeyBoardInfo {
  content: string;
  langIndex: number;
}

export class KeyBoardState {

  public langs = [
    board,
    boardRU
  ];


  private _info: KeyBoardInfo;

  get info() {
    return this._info
  }

  set info(val: KeyBoardInfo) {
    this._info = val;
    this.onChange.edit(this._info)
  }

  constructor (init: KeyBoardInfo) {
    this._info = init;
  }

  public onChange = new Listen <KeyBoardInfo>()
}