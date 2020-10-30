/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Expression,
  Extension,
  IMeasureGroupStratifier,
  MeasureGroupStratifierComponent,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class MeasureGroupStratifier extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Measure.Group.Stratifier";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "criteria",
      fieldType: [Expression],
      isArray: false
    }, {
      fieldName: "component",
      fieldType: [MeasureGroupStratifierComponent],
      isArray: true
    }];
  }

  public code?: CodeableConcept;

  public description?: PrimitiveString;

  public criteria?: Expression;

  public component?: Array<MeasureGroupStratifierComponent>;

  public static parse(
    json: IMeasureGroupStratifier,
    providedInstance: MeasureGroupStratifier = new MeasureGroupStratifier()
  ): MeasureGroupStratifier {
    const newInstance: MeasureGroupStratifier = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.criteria !== undefined) {
      newInstance.criteria = Expression.parse(json.criteria);
    }
    if (json.component !== undefined) {
      newInstance.component = json.component.map((x) => MeasureGroupStratifierComponent.parse(x));
    }
    return newInstance;
  }

  public static isMeasureGroupStratifier(input?: unknown): input is MeasureGroupStratifier {
    const castInput = input as MeasureGroupStratifier;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureGroupStratifier";
  }

  public toJSON(): IMeasureGroupStratifier {
    const result: IMeasureGroupStratifier = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.criteria) {
      result.criteria = this.criteria.toJSON();
    }

    if (this.component) {
      result.component = this.component.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MeasureGroupStratifier {
    return MeasureGroupStratifier.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureGroupStratifier";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
