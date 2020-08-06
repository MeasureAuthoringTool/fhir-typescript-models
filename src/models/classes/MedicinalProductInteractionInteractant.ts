/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicinalProductInteractionInteractant,
  Reference,
} from "../internal";

export class MedicinalProductInteractionInteractant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductInteraction.Interactant";

  public item?: Reference | CodeableConcept;

  public static parse(
    json: IMedicinalProductInteractionInteractant,
    providedInstance: MedicinalProductInteractionInteractant = new MedicinalProductInteractionInteractant()
  ): MedicinalProductInteractionInteractant {
    const newInstance: MedicinalProductInteractionInteractant = BackboneElement.parse(json, providedInstance);
  
    if (json.itemReference) {
      newInstance.item = Reference.parse(json.itemReference);
    }
    if (json.itemCodeableConcept) {
      newInstance.item = CodeableConcept.parse(json.itemCodeableConcept);
    }
    return newInstance;
  }

  public static isMedicinalProductInteractionInteractant(input?: unknown): input is MedicinalProductInteractionInteractant {
    const castInput = input as MedicinalProductInteractionInteractant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductInteractionInteractant";
  }

  public toJSON(): IMedicinalProductInteractionInteractant {
    const result: IMedicinalProductInteractionInteractant = super.toJSON();

    if (this.item && Reference.isReference(this.item)) {
      result.itemReference = this.item.toJSON();
    }

    if (this.item && CodeableConcept.isCodeableConcept(this.item)) {
      result.itemCodeableConcept = this.item.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductInteractionInteractant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
