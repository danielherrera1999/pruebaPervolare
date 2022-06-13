export class Category {
  id?: number;
  childs?: any[];
  code?: number;
  title?: string;
  description?: string;
  idParentCategory?: number;
  createDate?: Date;
  updateDate?: Date;
}

export class SelectCategory{
  id?: number;
  title?: number;
}
