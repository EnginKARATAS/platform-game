export default class DataStore {
  private static instance: DataStore;
  private data: { [key: string]: any[] } = {};

  private constructor() {}

  public static getInstance(): DataStore {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }

  public setArray(key: string, arr: any[]) {
    this.data[key] = arr;
  }

  public pushItem(key: string, item: any) {
    this.data[key].push(item);
  }

  public getArray(key: string): any[] {
    return this.data[key];
  }
}
