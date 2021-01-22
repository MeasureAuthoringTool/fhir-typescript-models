/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IProvenanceEntity,
  ProvenanceAgent,
  ProvenanceEntityRole,
  Reference,
  FhirType
} from "../internal";

@FhirType("ProvenanceEntity", "BackboneElement")
export class ProvenanceEntity extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Provenance.Entity";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ProvenanceEntityRole")
  public role?: ProvenanceEntityRole;

  @FhirField("Reference")
  public what?: Reference;

  @FhirList("ProvenanceAgent")
  public agent?: Array<ProvenanceAgent>;

  public static parse(
    json: IProvenanceEntity,
    providedInstance: ProvenanceEntity = new ProvenanceEntity()
  ): ProvenanceEntity {
    const newInstance: ProvenanceEntity = BackboneElement.parse(json, providedInstance);
  
    if (json.role !== undefined) {
      newInstance.role = ProvenanceEntityRole.parsePrimitive(json.role, json._role);
    }
    if (json.what !== undefined) {
      newInstance.what = Reference.parse(json.what);
    }
    if (json.agent !== undefined) {
      newInstance.agent = json.agent.map((x) => ProvenanceAgent.parse(x));
    }
    return newInstance;
  }

  public static isProvenanceEntity(input?: unknown): input is ProvenanceEntity {
    const castInput = input as ProvenanceEntity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProvenanceEntity";
  }

  public toJSON(): IProvenanceEntity {
    const result: IProvenanceEntity = super.toJSON();

    if (this.role) {
      result.role = this.role.value;
      result._role = Extension.serializePrimitiveExtension(this.role);
    }

    if (this.what) {
      result.what = this.what.toJSON();
    }

    if (this.agent) {
      result.agent = this.agent.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ProvenanceEntity {
    return ProvenanceEntity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ProvenanceEntity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
