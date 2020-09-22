/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  ISubstanceReferenceInformationGeneElement,
  Reference,
} from "../internal";

export class SubstanceReferenceInformationGeneElement extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceReferenceInformation.GeneElement";
  
  static readonly primaryCodePath: string | null = null;

  public type?: CodeableConcept;

  public element?: Identifier;

  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceReferenceInformationGeneElement,
    providedInstance: SubstanceReferenceInformationGeneElement = new SubstanceReferenceInformationGeneElement()
  ): SubstanceReferenceInformationGeneElement {
    const newInstance: SubstanceReferenceInformationGeneElement = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.element !== undefined) {
      newInstance.element = Identifier.parse(json.element);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceReferenceInformationGeneElement(input?: unknown): input is SubstanceReferenceInformationGeneElement {
    const castInput = input as SubstanceReferenceInformationGeneElement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceReferenceInformationGeneElement";
  }

  public toJSON(): ISubstanceReferenceInformationGeneElement {
    const result: ISubstanceReferenceInformationGeneElement = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.element) {
      result.element = this.element.toJSON();
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceReferenceInformationGeneElement {
    return SubstanceReferenceInformationGeneElement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceReferenceInformationGeneElement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
