/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DataRequirementCodeFilter,
  DataRequirementDateFilter,
  DataRequirementSort,
  Element,
  Extension,
  FHIRAllTypes,
  IDataRequirement,
  PrimitiveCanonical,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
} from "../internal";

export class DataRequirement extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DataRequirement";

  public type?: FHIRAllTypes;

  public profile?: Array<PrimitiveCanonical>;

  public subject?: CodeableConcept | Reference;

  public mustSupport?: Array<PrimitiveString>;

  public codeFilter?: Array<DataRequirementCodeFilter>;

  public dateFilter?: Array<DataRequirementDateFilter>;

  public limit?: PrimitivePositiveInt;

  public sort?: Array<DataRequirementSort>;

  public static parse(
    json: IDataRequirement,
    providedInstance: DataRequirement = new DataRequirement()
  ): DataRequirement {
    const newInstance: DataRequirement = Element.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = FHIRAllTypes.parsePrimitive(json.type, json._type);
    }
    if (json.profile !== undefined) {
      newInstance.profile = json.profile.map((x, i) => {
        const ext = json._profile && json._profile[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.subjectCodeableConcept !== undefined) {
      newInstance.subject = CodeableConcept.parse(json.subjectCodeableConcept);
    }
    if (json.subjectReference !== undefined) {
      newInstance.subject = Reference.parse(json.subjectReference);
    }
    if (json.mustSupport !== undefined) {
      newInstance.mustSupport = json.mustSupport.map((x, i) => {
        const ext = json._mustSupport && json._mustSupport[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.codeFilter !== undefined) {
      newInstance.codeFilter = json.codeFilter.map((x) => DataRequirementCodeFilter.parse(x));
    }
    if (json.dateFilter !== undefined) {
      newInstance.dateFilter = json.dateFilter.map((x) => DataRequirementDateFilter.parse(x));
    }
    if (json.limit !== undefined) {
      newInstance.limit = PrimitivePositiveInt.parsePrimitive(json.limit, json._limit);
    }
    if (json.sort !== undefined) {
      newInstance.sort = json.sort.map((x) => DataRequirementSort.parse(x));
    }
    return newInstance;
  }

  public static isDataRequirement(input?: unknown): input is DataRequirement {
    const castInput = input as DataRequirement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DataRequirement";
  }

  public toJSON(): IDataRequirement {
    const result: IDataRequirement = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.profile) {
      result.profile = this.profile.filter(x => !!x).map(x => x.value) as typeof result.profile;
      result._profile = Extension.serializePrimitiveExtensionArray(this.profile);
    }

    if (this.subject && CodeableConcept.isCodeableConcept(this.subject)) {
      result.subjectCodeableConcept = this.subject.toJSON();
    }

    if (this.subject && Reference.isReference(this.subject)) {
      result.subjectReference = this.subject.toJSON();
    }

    if (this.mustSupport) {
      result.mustSupport = this.mustSupport.filter(x => !!x).map(x => x.value) as typeof result.mustSupport;
      result._mustSupport = Extension.serializePrimitiveExtensionArray(this.mustSupport);
    }

    if (this.codeFilter) {
      result.codeFilter = this.codeFilter.map((x) => x.toJSON());
    }

    if (this.dateFilter) {
      result.dateFilter = this.dateFilter.map((x) => x.toJSON());
    }

    if (this.limit) {
      result.limit = this.limit.value;
      result._limit = Extension.serializePrimitiveExtension(this.limit);
    }

    if (this.sort) {
      result.sort = this.sort.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DataRequirement {
    return DataRequirement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DataRequirement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
