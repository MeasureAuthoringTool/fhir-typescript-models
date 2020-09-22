/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  IPractitionerQualification,
  Period,
  Reference,
} from "../internal";

export class PractitionerQualification extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Practitioner.Qualification";
  
  static readonly primaryCodePath: string | null = null;

  public identifier?: Array<Identifier>;

  public code?: CodeableConcept;

  public period?: Period;

  public issuer?: Reference;

  public static parse(
    json: IPractitionerQualification,
    providedInstance: PractitionerQualification = new PractitionerQualification()
  ): PractitionerQualification {
    const newInstance: PractitionerQualification = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.issuer !== undefined) {
      newInstance.issuer = Reference.parse(json.issuer);
    }
    return newInstance;
  }

  public static isPractitionerQualification(input?: unknown): input is PractitionerQualification {
    const castInput = input as PractitionerQualification;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PractitionerQualification";
  }

  public toJSON(): IPractitionerQualification {
    const result: IPractitionerQualification = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.issuer) {
      result.issuer = this.issuer.toJSON();
    }

    return result;
  }

  public clone(): PractitionerQualification {
    return PractitionerQualification.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PractitionerQualification";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
