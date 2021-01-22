/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IProvenanceAgent,
  Reference,
  FhirType
} from "../internal";

@FhirType("ProvenanceAgent", "BackboneElement")
export class ProvenanceAgent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Provenance.Agent";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("CodeableConcept")
  public role?: Array<CodeableConcept>;

  @FhirField("Reference")
  public who?: Reference;

  @FhirField("Reference")
  public onBehalfOf?: Reference;

  public static parse(
    json: IProvenanceAgent,
    providedInstance: ProvenanceAgent = new ProvenanceAgent()
  ): ProvenanceAgent {
    const newInstance: ProvenanceAgent = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.role !== undefined) {
      newInstance.role = json.role.map((x) => CodeableConcept.parse(x));
    }
    if (json.who !== undefined) {
      newInstance.who = Reference.parse(json.who);
    }
    if (json.onBehalfOf !== undefined) {
      newInstance.onBehalfOf = Reference.parse(json.onBehalfOf);
    }
    return newInstance;
  }

  public static isProvenanceAgent(input?: unknown): input is ProvenanceAgent {
    const castInput = input as ProvenanceAgent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProvenanceAgent";
  }

  public toJSON(): IProvenanceAgent {
    const result: IProvenanceAgent = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.role) {
      result.role = this.role.map((x) => x.toJSON());
    }

    if (this.who) {
      result.who = this.who.toJSON();
    }

    if (this.onBehalfOf) {
      result.onBehalfOf = this.onBehalfOf.toJSON();
    }

    return result;
  }

  public clone(): ProvenanceAgent {
    return ProvenanceAgent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ProvenanceAgent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
