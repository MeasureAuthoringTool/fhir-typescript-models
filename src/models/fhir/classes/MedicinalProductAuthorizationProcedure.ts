/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  Identifier,
  IMedicinalProductAuthorizationProcedure,
  Period,
  PrimitiveDateTime,
} from "../internal";

export class MedicinalProductAuthorizationProcedure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductAuthorization.Procedure";

  public identifier?: Identifier;

  public type?: CodeableConcept;

  public date?: Period | PrimitiveDateTime;

  public application?: Array<MedicinalProductAuthorizationProcedure>;

  public static parse(
    json: IMedicinalProductAuthorizationProcedure,
    providedInstance: MedicinalProductAuthorizationProcedure = new MedicinalProductAuthorizationProcedure()
  ): MedicinalProductAuthorizationProcedure {
    const newInstance: MedicinalProductAuthorizationProcedure = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.datePeriod) {
      newInstance.date = Period.parse(json.datePeriod);
    }
    if (json.dateDateTime) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.dateDateTime, json._dateDateTime);
    }
    if (json.application) {
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
  
  public getTypeName(): string {
    return "MedicinalProductAuthorizationProcedure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
