/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IAdverseEventSuspectEntityCausality,
  PrimitiveString,
  Reference,
} from "../internal";

export class AdverseEventSuspectEntityCausality extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AdverseEvent.SuspectEntity.Causality";
  
  static readonly primaryCodePath: string | null = null;

  public assessment?: CodeableConcept;

  public productRelatedness?: PrimitiveString;

  public author?: Reference;

  public method?: CodeableConcept;

  public static parse(
    json: IAdverseEventSuspectEntityCausality,
    providedInstance: AdverseEventSuspectEntityCausality = new AdverseEventSuspectEntityCausality()
  ): AdverseEventSuspectEntityCausality {
    const newInstance: AdverseEventSuspectEntityCausality = BackboneElement.parse(json, providedInstance);
  
    if (json.assessment !== undefined) {
      newInstance.assessment = CodeableConcept.parse(json.assessment);
    }
    if (json.productRelatedness !== undefined) {
      newInstance.productRelatedness = PrimitiveString.parsePrimitive(json.productRelatedness, json._productRelatedness);
    }
    if (json.author !== undefined) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    return newInstance;
  }

  public static isAdverseEventSuspectEntityCausality(input?: unknown): input is AdverseEventSuspectEntityCausality {
    const castInput = input as AdverseEventSuspectEntityCausality;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AdverseEventSuspectEntityCausality";
  }

  public toJSON(): IAdverseEventSuspectEntityCausality {
    const result: IAdverseEventSuspectEntityCausality = super.toJSON();

    if (this.assessment) {
      result.assessment = this.assessment.toJSON();
    }

    if (this.productRelatedness) {
      result.productRelatedness = this.productRelatedness.value;
      result._productRelatedness = Extension.serializePrimitiveExtension(this.productRelatedness);
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    return result;
  }

  public clone(): AdverseEventSuspectEntityCausality {
    return AdverseEventSuspectEntityCausality.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AdverseEventSuspectEntityCausality";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
