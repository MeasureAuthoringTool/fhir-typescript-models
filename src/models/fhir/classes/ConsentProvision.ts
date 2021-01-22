/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Coding,
  ConsentProvisionActor,
  ConsentProvisionData,
  ConsentProvisionType,
  Extension,
  FhirField,
  FhirList,
  IConsentProvision,
  Period,
  FhirType
} from "../internal";

@FhirType("ConsentProvision", "BackboneElement")
export class ConsentProvision extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Consent.Provision";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ConsentProvisionType")
  public type?: ConsentProvisionType;

  @FhirField("Period")
  public period?: Period;

  @FhirList("ConsentProvisionActor")
  public actor?: Array<ConsentProvisionActor>;

  @FhirList("CodeableConcept")
  public action?: Array<CodeableConcept>;

  @FhirList("Coding")
  public securityLabel?: Array<Coding>;

  @FhirList("Coding")
  public purpose?: Array<Coding>;

  @FhirList("Coding")
  public class?: Array<Coding>;

  @FhirList("CodeableConcept")
  public code?: Array<CodeableConcept>;

  @FhirField("Period")
  public dataPeriod?: Period;

  @FhirList("ConsentProvisionData")
  public data?: Array<ConsentProvisionData>;

  @FhirList("ConsentProvision")
  public provision?: Array<ConsentProvision>;

  public static parse(
    json: IConsentProvision,
    providedInstance: ConsentProvision = new ConsentProvision()
  ): ConsentProvision {
    const newInstance: ConsentProvision = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ConsentProvisionType.parsePrimitive(json.type, json._type);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.actor !== undefined) {
      newInstance.actor = json.actor.map((x) => ConsentProvisionActor.parse(x));
    }
    if (json.action !== undefined) {
      newInstance.action = json.action.map((x) => CodeableConcept.parse(x));
    }
    if (json.securityLabel !== undefined) {
      newInstance.securityLabel = json.securityLabel.map((x) => Coding.parse(x));
    }
    if (json.purpose !== undefined) {
      newInstance.purpose = json.purpose.map((x) => Coding.parse(x));
    }
    if (json.class !== undefined) {
      newInstance.class = json.class.map((x) => Coding.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.dataPeriod !== undefined) {
      newInstance.dataPeriod = Period.parse(json.dataPeriod);
    }
    if (json.data !== undefined) {
      newInstance.data = json.data.map((x) => ConsentProvisionData.parse(x));
    }
    if (json.provision !== undefined) {
      newInstance.provision = json.provision.map((x) => ConsentProvision.parse(x));
    }
    return newInstance;
  }

  public static isConsentProvision(input?: unknown): input is ConsentProvision {
    const castInput = input as ConsentProvision;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentProvision";
  }

  public toJSON(): IConsentProvision {
    const result: IConsentProvision = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.map((x) => x.toJSON());
    }

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    if (this.securityLabel) {
      result.securityLabel = this.securityLabel.map((x) => x.toJSON());
    }

    if (this.purpose) {
      result.purpose = this.purpose.map((x) => x.toJSON());
    }

    if (this.class) {
      result.class = this.class.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.dataPeriod) {
      result.dataPeriod = this.dataPeriod.toJSON();
    }

    if (this.data) {
      result.data = this.data.map((x) => x.toJSON());
    }

    if (this.provision) {
      result.provision = this.provision.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ConsentProvision {
    return ConsentProvision.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConsentProvision";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
