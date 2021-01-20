/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IPatientLink,
  LinkType,
  Reference,
  FhirType
} from "../internal";

@FhirType("PatientLink", "BackboneElement")
export class PatientLink extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Patient.Link";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public other?: Reference;

  @FhirField("LinkType")
  public type?: LinkType;

  public static parse(
    json: IPatientLink,
    providedInstance: PatientLink = new PatientLink()
  ): PatientLink {
    const newInstance: PatientLink = BackboneElement.parse(json, providedInstance);
  
    if (json.other !== undefined) {
      newInstance.other = Reference.parse(json.other);
    }
    if (json.type !== undefined) {
      newInstance.type = LinkType.parsePrimitive(json.type, json._type);
    }
    return newInstance;
  }

  public static isPatientLink(input?: unknown): input is PatientLink {
    const castInput = input as PatientLink;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PatientLink";
  }

  public toJSON(): IPatientLink {
    const result: IPatientLink = super.toJSON();

    if (this.other) {
      result.other = this.other.toJSON();
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    return result;
  }

  public clone(): PatientLink {
    return PatientLink.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PatientLink";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
