/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ISubstancePolymer,
  PrimitiveString,
  SubstancePolymerMonomerSet,
  SubstancePolymerRepeat,
  FhirType
} from "../internal";

@FhirType("SubstancePolymer", "DomainResource")
export class SubstancePolymer extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public class?: CodeableConcept;

  @FhirField("CodeableConcept")
  public geometry?: CodeableConcept;

  @FhirList("CodeableConcept")
  public copolymerConnectivity?: Array<CodeableConcept>;

  @FhirList("PrimitiveString")
  public modification?: Array<PrimitiveString>;

  @FhirList("SubstancePolymerMonomerSet")
  public monomerSet?: Array<SubstancePolymerMonomerSet>;

  @FhirList("SubstancePolymerRepeat")
  public repeat?: Array<SubstancePolymerRepeat>;

  public static parse(
    json: ISubstancePolymer,
    providedInstance: SubstancePolymer = new SubstancePolymer()
  ): SubstancePolymer {
    const newInstance: SubstancePolymer = DomainResource.parse(json, providedInstance);
  
    if (json.class !== undefined) {
      newInstance.class = CodeableConcept.parse(json.class);
    }
    if (json.geometry !== undefined) {
      newInstance.geometry = CodeableConcept.parse(json.geometry);
    }
    if (json.copolymerConnectivity !== undefined) {
      newInstance.copolymerConnectivity = json.copolymerConnectivity.map((x) => CodeableConcept.parse(x));
    }
    if (json.modification !== undefined) {
      newInstance.modification = json.modification.map((x, i) => PrimitiveString.parsePrimitive(x, json._modification?.[i]));
    }
    if (json.monomerSet !== undefined) {
      newInstance.monomerSet = json.monomerSet.map((x) => SubstancePolymerMonomerSet.parse(x));
    }
    if (json.repeat !== undefined) {
      newInstance.repeat = json.repeat.map((x) => SubstancePolymerRepeat.parse(x));
    }
    return newInstance;
  }

  public static isSubstancePolymer(input?: unknown): input is SubstancePolymer {
    const castInput = input as SubstancePolymer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstancePolymer";
  }

  public toJSON(): ISubstancePolymer {
    const result: ISubstancePolymer = super.toJSON();

    if (this.class) {
      result.class = this.class.toJSON();
    }

    if (this.geometry) {
      result.geometry = this.geometry.toJSON();
    }

    if (this.copolymerConnectivity) {
      result.copolymerConnectivity = this.copolymerConnectivity.map((x) => x.toJSON());
    }

    if (this.modification) {
      result.modification = this.modification.filter(x => !!x).map(x => x.value) as typeof result.modification;
      result._modification = Extension.serializePrimitiveExtensionArray(this.modification);
    }

    if (this.monomerSet) {
      result.monomerSet = this.monomerSet.map((x) => x.toJSON());
    }

    if (this.repeat) {
      result.repeat = this.repeat.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstancePolymer {
    return SubstancePolymer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstancePolymer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
