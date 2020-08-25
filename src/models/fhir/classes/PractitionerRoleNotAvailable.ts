/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IPractitionerRoleNotAvailable,
  Period,
  PrimitiveString,
} from "../internal";

export class PractitionerRoleNotAvailable extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PractitionerRole.NotAvailable";

  public description?: PrimitiveString;

  public during?: Period;

  public static parse(
    json: IPractitionerRoleNotAvailable,
    providedInstance: PractitionerRoleNotAvailable = new PractitionerRoleNotAvailable()
  ): PractitionerRoleNotAvailable {
    const newInstance: PractitionerRoleNotAvailable = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.during) {
      newInstance.during = Period.parse(json.during);
    }
    return newInstance;
  }

  public static isPractitionerRoleNotAvailable(input?: unknown): input is PractitionerRoleNotAvailable {
    const castInput = input as PractitionerRoleNotAvailable;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PractitionerRoleNotAvailable";
  }

  public toJSON(): IPractitionerRoleNotAvailable {
    const result: IPractitionerRoleNotAvailable = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.during) {
      result.during = this.during.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "PractitionerRoleNotAvailable";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
