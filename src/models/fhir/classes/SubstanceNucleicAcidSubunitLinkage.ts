/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  Identifier,
  ISubstanceNucleicAcidSubunitLinkage,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("SubstanceNucleicAcidSubunitLinkage", "BackboneElement")
export class SubstanceNucleicAcidSubunitLinkage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceNucleicAcid.Subunit.Linkage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public connectivity?: PrimitiveString;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public residueSite?: PrimitiveString;

  public static parse(
    json: ISubstanceNucleicAcidSubunitLinkage,
    providedInstance: SubstanceNucleicAcidSubunitLinkage = new SubstanceNucleicAcidSubunitLinkage()
  ): SubstanceNucleicAcidSubunitLinkage {
    const newInstance: SubstanceNucleicAcidSubunitLinkage = BackboneElement.parse(json, providedInstance);
  
    if (json.connectivity !== undefined) {
      newInstance.connectivity = PrimitiveString.parsePrimitive(json.connectivity, json._connectivity);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.residueSite !== undefined) {
      newInstance.residueSite = PrimitiveString.parsePrimitive(json.residueSite, json._residueSite);
    }
    return newInstance;
  }

  public static isSubstanceNucleicAcidSubunitLinkage(input?: unknown): input is SubstanceNucleicAcidSubunitLinkage {
    const castInput = input as SubstanceNucleicAcidSubunitLinkage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceNucleicAcidSubunitLinkage";
  }

  public toJSON(): ISubstanceNucleicAcidSubunitLinkage {
    const result: ISubstanceNucleicAcidSubunitLinkage = super.toJSON();

    if (this.connectivity) {
      result.connectivity = this.connectivity.value;
      result._connectivity = Extension.serializePrimitiveExtension(this.connectivity);
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.residueSite) {
      result.residueSite = this.residueSite.value;
      result._residueSite = Extension.serializePrimitiveExtension(this.residueSite);
    }

    return result;
  }

  public clone(): SubstanceNucleicAcidSubunitLinkage {
    return SubstanceNucleicAcidSubunitLinkage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceNucleicAcidSubunitLinkage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
