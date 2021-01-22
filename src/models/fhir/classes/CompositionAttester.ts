/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CompositionAttestationMode,
  Extension,
  FhirField,
  ICompositionAttester,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("CompositionAttester", "BackboneElement")
export class CompositionAttester extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Composition.Attester";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CompositionAttestationMode")
  public mode?: CompositionAttestationMode;

  @FhirField("PrimitiveDateTime")
  public time?: PrimitiveDateTime;

  @FhirField("Reference")
  public party?: Reference;

  public static parse(
    json: ICompositionAttester,
    providedInstance: CompositionAttester = new CompositionAttester()
  ): CompositionAttester {
    const newInstance: CompositionAttester = BackboneElement.parse(json, providedInstance);
  
    if (json.mode !== undefined) {
      newInstance.mode = CompositionAttestationMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.time !== undefined) {
      newInstance.time = PrimitiveDateTime.parsePrimitive(json.time, json._time);
    }
    if (json.party !== undefined) {
      newInstance.party = Reference.parse(json.party);
    }
    return newInstance;
  }

  public static isCompositionAttester(input?: unknown): input is CompositionAttester {
    const castInput = input as CompositionAttester;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompositionAttester";
  }

  public toJSON(): ICompositionAttester {
    const result: ICompositionAttester = super.toJSON();

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.time) {
      result.time = this.time.value;
      result._time = Extension.serializePrimitiveExtension(this.time);
    }

    if (this.party) {
      result.party = this.party.toJSON();
    }

    return result;
  }

  public clone(): CompositionAttester {
    return CompositionAttester.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CompositionAttester";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
