/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  ICareTeamParticipant,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("CareTeamParticipant", "BackboneElement")
export class CareTeamParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CareTeam.Participant";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public role?: Array<CodeableConcept>;

  @FhirField("Reference")
  public member?: Reference;

  @FhirField("Reference")
  public onBehalfOf?: Reference;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: ICareTeamParticipant,
    providedInstance: CareTeamParticipant = new CareTeamParticipant()
  ): CareTeamParticipant {
    const newInstance: CareTeamParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.role !== undefined) {
      newInstance.role = json.role.map((x) => CodeableConcept.parse(x));
    }
    if (json.member !== undefined) {
      newInstance.member = Reference.parse(json.member);
    }
    if (json.onBehalfOf !== undefined) {
      newInstance.onBehalfOf = Reference.parse(json.onBehalfOf);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isCareTeamParticipant(input?: unknown): input is CareTeamParticipant {
    const castInput = input as CareTeamParticipant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CareTeamParticipant";
  }

  public toJSON(): ICareTeamParticipant {
    const result: ICareTeamParticipant = super.toJSON();

    if (this.role) {
      result.role = this.role.map((x) => x.toJSON());
    }

    if (this.member) {
      result.member = this.member.toJSON();
    }

    if (this.onBehalfOf) {
      result.onBehalfOf = this.onBehalfOf.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): CareTeamParticipant {
    return CareTeamParticipant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CareTeamParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
