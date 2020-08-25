/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  ISubstancePolymer,
  PrimitiveString,
  SubstancePolymerMonomerSet,
  SubstancePolymerRepeat,
} from "../internal";

export class SubstancePolymer extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer";

  public class?: CodeableConcept;

  public geometry?: CodeableConcept;

  public copolymerConnectivity?: Array<CodeableConcept>;

  public modification?: Array<PrimitiveString>;

  public monomerSet?: Array<SubstancePolymerMonomerSet>;

  public repeat?: Array<SubstancePolymerRepeat>;

  public static parse(
    json: ISubstancePolymer,
    providedInstance: SubstancePolymer = new SubstancePolymer()
  ): SubstancePolymer {
    const newInstance: SubstancePolymer = DomainResource.parse(json, providedInstance);
  
    if (json.class) {
      newInstance.class = CodeableConcept.parse(json.class);
    }
    if (json.geometry) {
      newInstance.geometry = CodeableConcept.parse(json.geometry);
    }
    if (json.copolymerConnectivity) {
      newInstance.copolymerConnectivity = json.copolymerConnectivity.map((x) => CodeableConcept.parse(x));
    }
    if (json.modification) {
      newInstance.modification = json.modification.map((x, i) => {
        const ext = json._modification && json._modification[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.monomerSet) {
      newInstance.monomerSet = json.monomerSet.map((x) => SubstancePolymerMonomerSet.parse(x));
    }
    if (json.repeat) {
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
  
  public getTypeName(): string {
    return "SubstancePolymer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
