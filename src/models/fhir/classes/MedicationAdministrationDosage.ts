/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  IMedicationAdministrationDosage,
  PrimitiveString,
  Ratio,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("MedicationAdministrationDosage", "BackboneElement")
export class MedicationAdministrationDosage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationAdministration.Dosage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirField("CodeableConcept")
  public site?: CodeableConcept;

  @FhirField("CodeableConcept")
  public route?: CodeableConcept;

  @FhirField("CodeableConcept")
  public method?: CodeableConcept;

  @FhirField("SimpleQuantity")
  public dose?: SimpleQuantity;

  @FhirChoice("Ratio", "SimpleQuantity")
  public rate?: Ratio | SimpleQuantity;

  public static parse(
    json: IMedicationAdministrationDosage,
    providedInstance: MedicationAdministrationDosage = new MedicationAdministrationDosage()
  ): MedicationAdministrationDosage {
    const newInstance: MedicationAdministrationDosage = BackboneElement.parse(json, providedInstance);
  
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.site !== undefined) {
      newInstance.site = CodeableConcept.parse(json.site);
    }
    if (json.route !== undefined) {
      newInstance.route = CodeableConcept.parse(json.route);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.dose !== undefined) {
      newInstance.dose = SimpleQuantity.parse(json.dose);
    }
    if (json.rateRatio !== undefined) {
      newInstance.rate = Ratio.parse(json.rateRatio);
    }
    if (json.rateQuantity !== undefined) {
      newInstance.rate = SimpleQuantity.parse(json.rateQuantity);
    }
    return newInstance;
  }

  public static isMedicationAdministrationDosage(input?: unknown): input is MedicationAdministrationDosage {
    const castInput = input as MedicationAdministrationDosage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationAdministrationDosage";
  }

  public toJSON(): IMedicationAdministrationDosage {
    const result: IMedicationAdministrationDosage = super.toJSON();

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.site) {
      result.site = this.site.toJSON();
    }

    if (this.route) {
      result.route = this.route.toJSON();
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.dose) {
      result.dose = this.dose.toJSON();
    }

    if (this.rate && Ratio.isRatio(this.rate)) {
      result.rateRatio = this.rate.toJSON();
    }

    if (this.rate && SimpleQuantity.isSimpleQuantity(this.rate)) {
      result.rateQuantity = this.rate.toJSON();
    }

    return result;
  }

  public clone(): MedicationAdministrationDosage {
    return MedicationAdministrationDosage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationAdministrationDosage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
