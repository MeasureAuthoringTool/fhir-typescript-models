/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IAccountCoverage,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("AccountCoverage", "BackboneElement")
export class AccountCoverage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Account.Coverage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public coverage?: Reference;

  @FhirField("PrimitivePositiveInt")
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
