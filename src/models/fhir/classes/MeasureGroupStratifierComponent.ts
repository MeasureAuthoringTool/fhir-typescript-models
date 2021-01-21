/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Expression,
  Extension,
  FhirField,
  IMeasureGroupStratifierComponent,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("MeasureGroupStratifierComponent", "BackboneElement")
export class MeasureGroupStratifierComponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Measure.Group.Stratifier.Component";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("Expression")
  public criteria?: Expression;

  public static parse(
    json: IMeasureGroupStratifierComponent,
    providedInstance: MeasureGroupStratifierComponent = new MeasureGroupStratifierComponent()
  ): MeasureGroupStratifierComponent {
    const newInstance: MeasureGroupStratifierComponent = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.criteria !== undefined) {
      newInstance.criteria = Expression.parse(json.criteria);
    }
    return newInstance;
  }

  public static isMeasureGroupStratifierComponent(input?: unknown): input is MeasureGroupStratifierComponent {
    const castInput = input as MeasureGroupStratifierComponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureGroupStratifierComponent";
  }

  public toJSON(): IMeasureGroupStratifierComponent {
    const result: IMeasureGroupStratifierComponent = super.toJSON();

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

    return result;
  }

  public clone(): MeasureGroupStratifierComponent {
    return MeasureGroupStratifierComponent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureGroupStratifierComponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
