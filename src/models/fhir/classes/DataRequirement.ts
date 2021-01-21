/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DataRequirementCodeFilter,
  DataRequirementDateFilter,
  DataRequirementSort,
  Element,
  Extension,
  FHIRAllTypes,
  FhirChoice,
  FhirField,
  FhirList,
  IDataRequirement,
  PrimitiveCanonical,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("DataRequirement", "Element")
export class DataRequirement extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DataRequirement";

  static readonly primaryCodePath: string | null = null;

  @FhirField("FHIRAllTypes")
  public type?: FHIRAllTypes;

  @FhirList("PrimitiveCanonical")
  public profile?: Array<PrimitiveCanonical>;

  @FhirChoice("CodeableConcept", "Reference")
  public subject?: CodeableConcept | Reference;

  @FhirList("PrimitiveString")
  public mustSupport?: Array<PrimitiveString>;

  @FhirList("DataRequirementCodeFilter")
  public codeFilter?: Array<DataRequirementCodeFilter>;

  @FhirList("DataRequirementDateFilter")
  public dateFilter?: Array<DataRequirementDateFilter>;

  @FhirField("PrimitivePositiveInt")
  public limit?: PrimitivePositiveInt;

  @FhirList("DataRequirementSort")
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
      newInstance.profile = json.profile.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._profile?.[i]));
    }
    if (json.subjectCodeableConcept !== undefined) {
      newInstance.subject = CodeableConcept.parse(json.subjectCodeableConcept);
    }
    if (json.subjectReference !== undefined) {
      newInstance.subject = Reference.parse(json.subjectReference);
    }
    if (json.mustSupport !== undefined) {
      newInstance.mustSupport = json.mustSupport.map((x, i) => PrimitiveString.parsePrimitive(x, json._mustSupport?.[i]));
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
