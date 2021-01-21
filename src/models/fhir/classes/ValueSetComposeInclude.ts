/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IValueSetComposeInclude,
  PrimitiveCanonical,
  PrimitiveString,
  PrimitiveUri,
  ValueSetComposeIncludeConcept,
  ValueSetComposeIncludeFilter,
  FhirType
} from "../internal";

@FhirType("ValueSetComposeInclude", "BackboneElement")
export class ValueSetComposeInclude extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose.Include";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public system?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirList("ValueSetComposeIncludeConcept")
  public concept?: Array<ValueSetComposeIncludeConcept>;

  @FhirList("ValueSetComposeIncludeFilter")
  public filter?: Array<ValueSetComposeIncludeFilter>;

  @FhirList("PrimitiveCanonical")
  public valueSet?: Array<PrimitiveCanonical>;

  public static parse(
    json: IValueSetComposeInclude,
    providedInstance: ValueSetComposeInclude = new ValueSetComposeInclude()
  ): ValueSetComposeInclude {
    const newInstance: ValueSetComposeInclude = BackboneElement.parse(json, providedInstance);
  
    if (json.system !== undefined) {
      newInstance.system = PrimitiveUri.parsePrimitive(json.system, json._system);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.concept !== undefined) {
      newInstance.concept = json.concept.map((x) => ValueSetComposeIncludeConcept.parse(x));
    }
    if (json.filter !== undefined) {
      newInstance.filter = json.filter.map((x) => ValueSetComposeIncludeFilter.parse(x));
    }
    if (json.valueSet !== undefined) {
      newInstance.valueSet = json.valueSet.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._valueSet?.[i]));
    }
    return newInstance;
  }

  public static isValueSetComposeInclude(input?: unknown): input is ValueSetComposeInclude {
    const castInput = input as ValueSetComposeInclude;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetComposeInclude";
  }

  public toJSON(): IValueSetComposeInclude {
    const result: IValueSetComposeInclude = super.toJSON();

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.concept) {
      result.concept = this.concept.map((x) => x.toJSON());
    }

    if (this.filter) {
      result.filter = this.filter.map((x) => x.toJSON());
    }

    if (this.valueSet) {
      result.valueSet = this.valueSet.filter(x => !!x).map(x => x.value) as typeof result.valueSet;
      result._valueSet = Extension.serializePrimitiveExtensionArray(this.valueSet);
    }

    return result;
  }

  public clone(): ValueSetComposeInclude {
    return ValueSetComposeInclude.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetComposeInclude";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
