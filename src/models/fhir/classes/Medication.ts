/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IMedication,
  MedicationBatch,
  MedicationIngredient,
  MedicationStatus,
  Ratio,
  Reference,
  FhirType
} from "../internal";

@FhirType("Medication", "DomainResource")
export class Medication extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Medication";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("MedicationStatus")
  public status?: MedicationStatus;

  @FhirField("Reference")
  public manufacturer?: Reference;

  @FhirField("CodeableConcept")
  public form?: CodeableConcept;

  @FhirField("Ratio")
  public amount?: Ratio;

  @FhirList("MedicationIngredient")
  public ingredient?: Array<MedicationIngredient>;

  @FhirField("MedicationBatch")
  public batch?: MedicationBatch;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IMedication,
    providedInstance: Medication = new Medication()
  ): Medication {
    const newInstance: Medication = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.status !== undefined) {
      newInstance.status = MedicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = Reference.parse(json.manufacturer);
    }
    if (json.form !== undefined) {
      newInstance.form = CodeableConcept.parse(json.form);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Ratio.parse(json.amount);
    }
    if (json.ingredient !== undefined) {
      newInstance.ingredient = json.ingredient.map((x) => MedicationIngredient.parse(x));
    }
    if (json.batch !== undefined) {
      newInstance.batch = MedicationBatch.parse(json.batch);
    }
    return newInstance;
  }

  public static isMedication(input?: unknown): input is Medication {
    const castInput = input as Medication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Medication";
  }

  public toJSON(): IMedication {
    const result: IMedication = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.toJSON();
    }

    if (this.form) {
      result.form = this.form.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.ingredient) {
      result.ingredient = this.ingredient.map((x) => x.toJSON());
    }

    if (this.batch) {
      result.batch = this.batch.toJSON();
    }

    return result;
  }

  public clone(): Medication {
    return Medication.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Medication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
