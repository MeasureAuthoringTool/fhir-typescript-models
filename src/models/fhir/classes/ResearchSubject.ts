/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IResearchSubject,
  Period,
  PrimitiveString,
  Reference,
  ResearchSubjectStatus,
  FhirType
} from "../internal";

@FhirType("ResearchSubject", "DomainResource")
export class ResearchSubject extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchSubject";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("ResearchSubjectStatus")
  public status?: ResearchSubjectStatus;

  @FhirField("Period")
  public period?: Period;

  @FhirField("Reference")
  public study?: Reference;

  @FhirField("Reference")
  public individual?: Reference;

  @FhirField("PrimitiveString")
  public assignedArm?: PrimitiveString;

  @FhirField("PrimitiveString")
  public actualArm?: PrimitiveString;

  @FhirField("Reference")
  public consent?: Reference;

  public static parse(
    json: IResearchSubject,
    providedInstance: ResearchSubject = new ResearchSubject()
  ): ResearchSubject {
    const newInstance: ResearchSubject = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ResearchSubjectStatus.parsePrimitive(json.status, json._status);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.study !== undefined) {
      newInstance.study = Reference.parse(json.study);
    }
    if (json.individual !== undefined) {
      newInstance.individual = Reference.parse(json.individual);
    }
    if (json.assignedArm !== undefined) {
      newInstance.assignedArm = PrimitiveString.parsePrimitive(json.assignedArm, json._assignedArm);
    }
    if (json.actualArm !== undefined) {
      newInstance.actualArm = PrimitiveString.parsePrimitive(json.actualArm, json._actualArm);
    }
    if (json.consent !== undefined) {
      newInstance.consent = Reference.parse(json.consent);
    }
    return newInstance;
  }

  public static isResearchSubject(input?: unknown): input is ResearchSubject {
    const castInput = input as ResearchSubject;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchSubject";
  }

  public toJSON(): IResearchSubject {
    const result: IResearchSubject = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.study) {
      result.study = this.study.toJSON();
    }

    if (this.individual) {
      result.individual = this.individual.toJSON();
    }

    if (this.assignedArm) {
      result.assignedArm = this.assignedArm.value;
      result._assignedArm = Extension.serializePrimitiveExtension(this.assignedArm);
    }

    if (this.actualArm) {
      result.actualArm = this.actualArm.value;
      result._actualArm = Extension.serializePrimitiveExtension(this.actualArm);
    }

    if (this.consent) {
      result.consent = this.consent.toJSON();
    }

    return result;
  }

  public clone(): ResearchSubject {
    return ResearchSubject.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ResearchSubject";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
