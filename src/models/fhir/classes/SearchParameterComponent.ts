/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ISearchParameterComponent,
  PrimitiveCanonical,
  PrimitiveString,
} from "../internal";

export class SearchParameterComponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchParameter.Component";

  public definition?: PrimitiveCanonical;

  public expression?: PrimitiveString;

  public static parse(
    json: ISearchParameterComponent,
    providedInstance: SearchParameterComponent = new SearchParameterComponent()
  ): SearchParameterComponent {
    const newInstance: SearchParameterComponent = BackboneElement.parse(json, providedInstance);
  
    if (json.definition) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definition, json._definition);
    }
    if (json.expression) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    return newInstance;
  }

  public static isSearchParameterComponent(input?: unknown): input is SearchParameterComponent {
    const castInput = input as SearchParameterComponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SearchParameterComponent";
  }

  public toJSON(): ISearchParameterComponent {
    const result: ISearchParameterComponent = super.toJSON();

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SearchParameterComponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
