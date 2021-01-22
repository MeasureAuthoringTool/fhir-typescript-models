/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ICompositionSection,
  Narrative,
  PrimitiveString,
  Reference,
  SectionMode,
  FhirType
} from "../internal";

@FhirType("CompositionSection", "BackboneElement")
export class CompositionSection extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Composition.Section";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("Reference")
  public author?: Array<Reference>;

  @FhirField("Reference")
  public focus?: Reference;

  @FhirField("Narrative")
  public text?: Narrative;

  @FhirField("SectionMode")
  public mode?: SectionMode;

  @FhirField("CodeableConcept")
  public orderedBy?: CodeableConcept;

  @FhirList("Reference")
  public entry?: Array<Reference>;

  @FhirField("CodeableConcept")
  public emptyReason?: CodeableConcept;

  @FhirList("CompositionSection")
  public section?: Array<CompositionSection>;

  public static parse(
    json: ICompositionSection,
    providedInstance: CompositionSection = new CompositionSection()
  ): CompositionSection {
    const newInstance: CompositionSection = BackboneElement.parse(json, providedInstance);
  
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => Reference.parse(x));
    }
    if (json.focus !== undefined) {
      newInstance.focus = Reference.parse(json.focus);
    }
    if (json.text !== undefined) {
      newInstance.text = Narrative.parse(json.text);
    }
    if (json.mode !== undefined) {
      newInstance.mode = SectionMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.orderedBy !== undefined) {
      newInstance.orderedBy = CodeableConcept.parse(json.orderedBy);
    }
    if (json.entry !== undefined) {
      newInstance.entry = json.entry.map((x) => Reference.parse(x));
    }
    if (json.emptyReason !== undefined) {
      newInstance.emptyReason = CodeableConcept.parse(json.emptyReason);
    }
    if (json.section !== undefined) {
      newInstance.section = json.section.map((x) => CompositionSection.parse(x));
    }
    return newInstance;
  }

  public static isCompositionSection(input?: unknown): input is CompositionSection {
    const castInput = input as CompositionSection;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompositionSection";
  }

  public toJSON(): ICompositionSection {
    const result: ICompositionSection = super.toJSON();

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.focus) {
      result.focus = this.focus.toJSON();
    }

    if (this.text) {
      result.text = this.text.toJSON();
    }

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.orderedBy) {
      result.orderedBy = this.orderedBy.toJSON();
    }

    if (this.entry) {
      result.entry = this.entry.map((x) => x.toJSON());
    }

    if (this.emptyReason) {
      result.emptyReason = this.emptyReason.toJSON();
    }

    if (this.section) {
      result.section = this.section.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CompositionSection {
    return CompositionSection.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CompositionSection";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
