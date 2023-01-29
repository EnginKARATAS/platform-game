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
    this.getArray("platforms").find((platform) => {
      platform._uniqueId == item._uniqueId && this.data[key].push(item);
    });
    this.data[key].push(item);
  }

  public getArray(key: string): any[] {
    return this.data[key];
  }
}
