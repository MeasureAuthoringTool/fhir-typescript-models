/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  DosageDoseAndRate,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IDosage,
  PrimitiveBoolean,
  PrimitiveInteger,
  PrimitiveString,
  Ratio,
  SimpleQuantity,
  Timing,
  FhirType
} from "../internal";

@FhirType("Dosage", "BackboneElement")
export class Dosage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Dosage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public sequence?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirList("CodeableConcept")
  public additionalInstruction?: Array<CodeableConcept>;

  @FhirField("PrimitiveString")
  public patientInstruction?: PrimitiveString;

  @FhirField("Timing")
  public timing?: Timing;

  @FhirChoice("PrimitiveBoolean", "CodeableConcept")
  public asNeeded?: PrimitiveBoolean | CodeableConcept;

  @FhirField("CodeableConcept")
  public site?: CodeableConcept;

  @FhirField("CodeableConcept")
  public route?: CodeableConcept;

  @FhirField("CodeableConcept")
  public method?: CodeableConcept;

  @FhirList("DosageDoseAndRate")
  public doseAndRate?: Array<DosageDoseAndRate>;

  @FhirField("Ratio")
  public maxDosePerPeriod?: Ratio;

  @FhirField("SimpleQuantity")
  public maxDosePerAdministration?: SimpleQuantity;

  @FhirField("SimpleQuantity")
  public maxDosePerLifetime?: SimpleQuantity;

  public static parse(
    json: IDosage,
    providedInstance: Dosage = new Dosage()
  ): Dosage {
    const newInstance: Dosage = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitiveInteger.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.additionalInstruction !== undefined) {
      newInstance.additionalInstruction = json.additionalInstruction.map((x) => CodeableConcept.parse(x));
    }
    if (json.patientInstruction !== undefined) {
      newInstance.patientInstruction = PrimitiveString.parsePrimitive(json.patientInstruction, json._patientInstruction);
    }
    if (json.timing !== undefined) {
      newInstance.timing = Timing.parse(json.timing);
    }
    if (json.asNeededBoolean !== undefined) {
      newInstance.asNeeded = PrimitiveBoolean.parsePrimitive(json.asNeededBoolean, json._asNeededBoolean);
    }
    if (json.asNeededCodeableConcept !== undefined) {
      newInstance.asNeeded = CodeableConcept.parse(json.asNeededCodeableConcept);
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
    if (json.doseAndRate !== undefined) {
      newInstance.doseAndRate = json.doseAndRate.map((x) => DosageDoseAndRate.parse(x));
    }
    if (json.maxDosePerPeriod !== undefined) {
      newInstance.maxDosePerPeriod = Ratio.parse(json.maxDosePerPeriod);
    }
    if (json.maxDosePerAdministration !== undefined) {
      newInstance.maxDosePerAdministration = SimpleQuantity.parse(json.maxDosePerAdministration);
    }
    if (json.maxDosePerLifetime !== undefined) {
      newInstance.maxDosePerLifetime = SimpleQuantity.parse(json.maxDosePerLifetime);
    }
    return newInstance;
  }

  public static isDosage(input?: unknown): input is Dosage {
    const castInput = input as Dosage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Dosage";
  }

  public toJSON(): IDosage {
    const result: IDosage = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.additionalInstruction) {
      result.additionalInstruction = this.additionalInstruction.map((x) => x.toJSON());
    }

    if (this.patientInstruction) {
      result.patientInstruction = this.patientInstruction.value;
      result._patientInstruction = Extension.serializePrimitiveExtension(this.patientInstruction);
    }

    if (this.timing) {
      result.timing = this.timing.toJSON();
    }

    if (this.asNeeded && PrimitiveBoolean.isPrimitiveBoolean(this.asNeeded)) {
      result.asNeededBoolean = this.asNeeded.value;
      result._asNeededBoolean = Extension.serializePrimitiveExtension(this.asNeeded);
    }

    if (this.asNeeded && CodeableConcept.isCodeableConcept(this.asNeeded)) {
      result.asNeededCodeableConcept = this.asNeeded.toJSON();
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

    if (this.doseAndRate) {
      result.doseAndRate = this.doseAndRate.map((x) => x.toJSON());
    }

    if (this.maxDosePerPeriod) {
      result.maxDosePerPeriod = this.maxDosePerPeriod.toJSON();
    }

    if (this.maxDosePerAdministration) {
      result.maxDosePerAdministration = this.maxDosePerAdministration.toJSON();
    }

    if (this.maxDosePerLifetime) {
      result.maxDosePerLifetime = this.maxDosePerLifetime.toJSON();
    }

    return result;
  }

  public clone(): Dosage {
    return Dosage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Dosage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
