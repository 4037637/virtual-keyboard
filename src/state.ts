import Listen from "./listen";
import board from "./langs/english"
import board1 from "./langs/russian"

export interface NKeyBoardData {
  content: string;
  langIndex: number;
  shift: boolean;
  caps: boolean;
}

export class KeyBoardState {
  
  public langs = [
    board,
    board1
  ];
  private _data: NKeyBoardData;

  get data() {
    return this._data
  }

  set data(val: NKeyBoardData) {
    this._data = val;
    this.onChange.edit(this.data)
  }

  constructor (init: NKeyBoardData) {
    this._data = init;
  }

  public onChange = new Listen<NKeyBoardData>();
}