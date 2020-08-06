/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  Identifier,
  IMedicinalProductSpecialDesignation,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class MedicinalProductSpecialDesignation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct.SpecialDesignation";

  public identifier?: Array<Identifier>;

  public type?: CodeableConcept;

  public intendedUse?: CodeableConcept;

  public indication?: CodeableConcept | Reference;

  public status?: CodeableConcept;

  public date?: PrimitiveDateTime;

  public species?: CodeableConcept;

  public static parse(
    json: IMedicinalProductSpecialDesignation,
    providedInstance: MedicinalProductSpecialDesignation = new MedicinalProductSpecialDesignation()
  ): MedicinalProductSpecialDesignation {
    const newInstance: MedicinalProductSpecialDesignation = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.intendedUse) {
      newInstance.intendedUse = CodeableConcept.parse(json.intendedUse);
    }
    if (json.indicationCodeableConcept) {
      newInstance.indication = CodeableConcept.parse(json.indicationCodeableConcept);
    }
    if (json.indicationReference) {
      newInstance.indication = Reference.parse(json.indicationReference);
    }
    if (json.status) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.species) {
      newInstance.species = CodeableConcept.parse(json.species);
    }
    return newInstance;
  }

  public static isMedicinalProductSpecialDesignation(input?: unknown): input is MedicinalProductSpecialDesignation {
    const castInput = input as MedicinalProductSpecialDesignation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductSpecialDesignation";
  }

  public toJSON(): IMedicinalProductSpecialDesignation {
    const result: IMedicinalProductSpecialDesignation = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.intendedUse) {
      result.intendedUse = this.intendedUse.toJSON();
    }

    if (this.indication && CodeableConcept.isCodeableConcept(this.indication)) {
      result.indicationCodeableConcept = this.indication.toJSON();
    }

    if (this.indication && Reference.isReference(this.indication)) {
      result.indicationReference = this.indication.toJSON();
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.species) {
      result.species = this.species.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductSpecialDesignation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
