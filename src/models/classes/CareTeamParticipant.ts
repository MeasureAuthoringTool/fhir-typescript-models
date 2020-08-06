/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ICareTeamParticipant,
  Period,
  Reference,
} from "../internal";

export class CareTeamParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CareTeam.Participant";

  public role?: Array<CodeableConcept>;

  public member?: Reference;

  public onBehalfOf?: Reference;

  public period?: Period;

  public static parse(
    json: ICareTeamParticipant,
    providedInstance: CareTeamParticipant = new CareTeamParticipant()
  ): CareTeamParticipant {
    const newInstance: CareTeamParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.role) {
      newInstance.role = json.role.map((x) => CodeableConcept.parse(x));
    }
    if (json.member) {
      newInstance.member = Reference.parse(json.member);
    }
    if (json.onBehalfOf) {
      newInstance.onBehalfOf = Reference.parse(json.onBehalfOf);
    }
    if (json.period) {
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
  
  public getTypeName(): string {
    return "CareTeamParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
