/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  IMedicinalProductInteraction,
  MedicinalProductInteractionInteractant,
  PrimitiveString,
  Reference,
} from "../internal";

export class MedicinalProductInteraction extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductInteraction";

  public subject?: Array<Reference>;

  public description?: PrimitiveString;

  public interactant?: Array<MedicinalProductInteractionInteractant>;

  public type?: CodeableConcept;

  public effect?: CodeableConcept;

  public incidence?: CodeableConcept;

  public management?: CodeableConcept;

  public static parse(
    json: IMedicinalProductInteraction,
    providedInstance: MedicinalProductInteraction = new MedicinalProductInteraction()
  ): MedicinalProductInteraction {
    const newInstance: MedicinalProductInteraction = DomainResource.parse(json, providedInstance);
  
    if (json.subject) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.interactant) {
      newInstance.interactant = json.interactant.map((x) => MedicinalProductInteractionInteractant.parse(x));
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.effect) {
      newInstance.effect = CodeableConcept.parse(json.effect);
    }
    if (json.incidence) {
      newInstance.incidence = CodeableConcept.parse(json.incidence);
    }
    if (json.management) {
      newInstance.management = CodeableConcept.parse(json.management);
    }
    return newInstance;
  }

  public static isMedicinalProductInteraction(input?: unknown): input is MedicinalProductInteraction {
    const castInput = input as MedicinalProductInteraction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductInteraction";
  }

  public toJSON(): IMedicinalProductInteraction {
    const result: IMedicinalProductInteraction = super.toJSON();

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.interactant) {
      result.interactant = this.interactant.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.effect) {
      result.effect = this.effect.toJSON();
    }

    if (this.incidence) {
      result.incidence = this.incidence.toJSON();
    }

    if (this.management) {
      result.management = this.management.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductInteraction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
