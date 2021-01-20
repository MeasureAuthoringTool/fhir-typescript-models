/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IMedicinalProductAuthorizationProcedure,
  Period,
  PrimitiveDateTime,
  FhirType
} from "../internal";

@FhirType("MedicinalProductAuthorizationProcedure", "BackboneElement")
export class MedicinalProductAuthorizationProcedure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductAuthorization.Procedure";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirChoice("Period", "PrimitiveDateTime")
  public date?: Period | PrimitiveDateTime;

  @FhirList("MedicinalProductAuthorizationProcedure")
  public application?: Array<MedicinalProductAuthorizationProcedure>;

  public static parse(
    json: IMedicinalProductAuthorizationProcedure,
    providedInstance: MedicinalProductAuthorizationProcedure = new MedicinalProductAuthorizationProcedure()
  ): MedicinalProductAuthorizationProcedure {
    const newInstance: MedicinalProductAuthorizationProcedure = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.datePeriod !== undefined) {
      newInstance.date = Period.parse(json.datePeriod);
    }
    if (json.dateDateTime !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.dateDateTime, json._dateDateTime);
    }
    if (json.application !== undefined) {
      newInstance.application = json.application.map((x) => MedicinalProductAuthorizationProcedure.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductAuthorizationProcedure(input?: unknown): input is MedicinalProductAuthorizationProcedure {
    const castInput = input as MedicinalProductAuthorizationProcedure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductAuthorizationProcedure";
  }

  public toJSON(): IMedicinalProductAuthorizationProcedure {
    const result: IMedicinalProductAuthorizationProcedure = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.date && Period.isPeriod(this.date)) {
      result.datePeriod = this.date.toJSON();
    }

    if (this.date && PrimitiveDateTime.isPrimitiveDateTime(this.date)) {
      result.dateDateTime = this.date.value;
      result._dateDateTime = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.application) {
      result.application = this.application.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductAuthorizationProcedure {
    return MedicinalProductAuthorizationProcedure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductAuthorizationProcedure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
