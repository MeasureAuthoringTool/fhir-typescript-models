/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IAccountCoverage,
  PrimitivePositiveInt,
  Reference,
  FieldMetadata
} from "../internal";

export class AccountCoverage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Account.Coverage";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "coverage",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "priority",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }];
  }

  public coverage?: Reference;

  public priority?: PrimitivePositiveInt;

  public static parse(
    json: IAccountCoverage,
    providedInstance: AccountCoverage = new AccountCoverage()
  ): AccountCoverage {
    const newInstance: AccountCoverage = BackboneElement.parse(json, providedInstance);
  
    if (json.coverage !== undefined) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    if (json.priority !== undefined) {
      newInstance.priority = PrimitivePositiveInt.parsePrimitive(json.priority, json._priority);
    }
    return newInstance;
  }

  public static isAccountCoverage(input?: unknown): input is AccountCoverage {
    const castInput = input as AccountCoverage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AccountCoverage";
  }

  public toJSON(): IAccountCoverage {
    const result: IAccountCoverage = super.toJSON();

    if (this.coverage) {
      result.coverage = this.coverage.toJSON();
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    return result;
  }

  public clone(): AccountCoverage {
    return AccountCoverage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AccountCoverage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
