/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  FilterOperator,
  ICodeSystemFilter,
  PrimitiveCode,
  PrimitiveString,
} from "../internal";

export class CodeSystemFilter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystem.Filter";

  public code?: PrimitiveCode;

  public description?: PrimitiveString;

  public operator?: Array<FilterOperator>;

  public value?: PrimitiveString;

  public static parse(
    json: ICodeSystemFilter,
    providedInstance: CodeSystemFilter = new CodeSystemFilter()
  ): CodeSystemFilter {
    const newInstance: CodeSystemFilter = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.operator) {
      newInstance.operator = json.operator.map((x, i) => {
        const ext = json._operator && json._operator[i];
        return FilterOperator.parsePrimitive(x, ext);
      });
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isCodeSystemFilter(input?: unknown): input is CodeSystemFilter {
    const castInput = input as CodeSystemFilter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemFilter";
  }

  public toJSON(): ICodeSystemFilter {
    const result: ICodeSystemFilter = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.operator) {
      result.operator = this.operator.filter(x => !!x).map(x => x.value) as typeof result.operator;
      result._operator = Extension.serializePrimitiveExtensionArray(this.operator);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CodeSystemFilter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
