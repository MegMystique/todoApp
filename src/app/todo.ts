export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  showEditButtons?: boolean = false;
  edit?: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
