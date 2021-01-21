/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirList,
  IBackboneElement,
  FhirType
} from "../internal";

@FhirType("BackboneElement", "Element")
export class BackboneElement extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BackboneElement";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Extension")
  public modifierExtension?: Array<Extension>;

  public static parse(
    json: IBackboneElement,
    providedInstance: BackboneElement = new BackboneElement()
  ): BackboneElement {
    const newInstance: BackboneElement = Element.parse(json, providedInstance);
  
    if (json.modifierExtension !== undefined) {
      newInstance.modifierExtension = json.modifierExtension.map((x) => Extension.parse(x));
    }
    return newInstance;
  }

  public static isBackboneElement(input?: unknown): input is BackboneElement {
    const castInput = input as BackboneElement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BackboneElement";
  }

  public toJSON(): IBackboneElement {
    const result: IBackboneElement = super.toJSON();

    if (this.modifierExtension) {
      result.modifierExtension = this.modifierExtension.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): BackboneElement {
    return BackboneElement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BackboneElement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
