/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IMedicinalProductSpecialDesignation,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductSpecialDesignation", "BackboneElement")
export class MedicinalProductSpecialDesignation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct.SpecialDesignation";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public intendedUse?: CodeableConcept;

  @FhirChoice("CodeableConcept", "Reference")
  public indication?: CodeableConcept | Reference;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirField("CodeableConcept")
  public species?: CodeableConcept;

  public static parse(
    json: IMedicinalProductSpecialDesignation,
    providedInstance: MedicinalProductSpecialDesignation = new MedicinalProductSpecialDesignation()
  ): MedicinalProductSpecialDesignation {
    const newInstance: MedicinalProductSpecialDesignation = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.intendedUse !== undefined) {
      newInstance.intendedUse = CodeableConcept.parse(json.intendedUse);
    }
    if (json.indicationCodeableConcept !== undefined) {
      newInstance.indication = CodeableConcept.parse(json.indicationCodeableConcept);
    }
    if (json.indicationReference !== undefined) {
      newInstance.indication = Reference.parse(json.indicationReference);
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.species !== undefined) {
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

  public clone(): MedicinalProductSpecialDesignation {
    return MedicinalProductSpecialDesignation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductSpecialDesignation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
