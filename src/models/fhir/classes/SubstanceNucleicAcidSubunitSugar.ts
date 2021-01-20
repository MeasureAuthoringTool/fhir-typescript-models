/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  Identifier,
  ISubstanceNucleicAcidSubunitSugar,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("SubstanceNucleicAcidSubunitSugar", "BackboneElement")
export class SubstanceNucleicAcidSubunitSugar extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceNucleicAcid.Subunit.Sugar";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public residueSite?: PrimitiveString;

  public static parse(
    json: ISubstanceNucleicAcidSubunitSugar,
    providedInstance: SubstanceNucleicAcidSubunitSugar = new SubstanceNucleicAcidSubunitSugar()
  ): SubstanceNucleicAcidSubunitSugar {
    const newInstance: SubstanceNucleicAcidSubunitSugar = BackboneElement.parse(json, providedInstance);
  
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

  public static isSubstanceNucleicAcidSubunitSugar(input?: unknown): input is SubstanceNucleicAcidSubunitSugar {
    const castInput = input as SubstanceNucleicAcidSubunitSugar;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceNucleicAcidSubunitSugar";
  }

  public toJSON(): ISubstanceNucleicAcidSubunitSugar {
    const result: ISubstanceNucleicAcidSubunitSugar = super.toJSON();

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

  public clone(): SubstanceNucleicAcidSubunitSugar {
    return SubstanceNucleicAcidSubunitSugar.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceNucleicAcidSubunitSugar";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
