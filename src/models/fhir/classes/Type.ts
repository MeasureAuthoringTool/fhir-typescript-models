/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  IType,
} from "../internal";

export class Type {
  static readonly baseType: string = "";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Type";

  public static parse(
    json: IType,
    providedInstance: Type = new Type()
  ): Type {
    const newInstance: Type = providedInstance;
  
    return newInstance;
  }

  public static isType(input?: unknown): input is Type {
    const castInput = input as Type;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Type";
  }

  public toJSON(): IType {
    const result: IType = {};

    return result;
  }
  
  public getTypeName(): string {
    return "Type";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
