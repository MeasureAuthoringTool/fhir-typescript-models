/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ICapabilityStatementRestSecurity,
  PrimitiveBoolean,
  PrimitiveMarkdown,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementRestSecurity", "BackboneElement")
export class CapabilityStatementRestSecurity extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Security";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public cors?: PrimitiveBoolean;

  @FhirList("CodeableConcept")
  public service?: Array<CodeableConcept>;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  public static parse(
    json: ICapabilityStatementRestSecurity,
    providedInstance: CapabilityStatementRestSecurity = new CapabilityStatementRestSecurity()
  ): CapabilityStatementRestSecurity {
    const newInstance: CapabilityStatementRestSecurity = BackboneElement.parse(json, providedInstance);
  
    if (json.cors !== undefined) {
      newInstance.cors = PrimitiveBoolean.parsePrimitive(json.cors, json._cors);
    }
    if (json.service !== undefined) {
      newInstance.service = json.service.map((x) => CodeableConcept.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isCapabilityStatementRestSecurity(input?: unknown): input is CapabilityStatementRestSecurity {
    const castInput = input as CapabilityStatementRestSecurity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementRestSecurity";
  }

  public toJSON(): ICapabilityStatementRestSecurity {
    const result: ICapabilityStatementRestSecurity = super.toJSON();

    if (this.cors) {
      result.cors = this.cors.value;
      result._cors = Extension.serializePrimitiveExtension(this.cors);
    }

    if (this.service) {
      result.service = this.service.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }

  public clone(): CapabilityStatementRestSecurity {
    return CapabilityStatementRestSecurity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementRestSecurity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
