/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Expression,
  Extension,
  IMeasureGroupStratifierComponent,
  PrimitiveString,
} from "../internal";

export class MeasureGroupStratifierComponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Measure.Group.Stratifier.Component";

  public code?: CodeableConcept;

  public description?: PrimitiveString;

  public criteria?: Expression;

  public static parse(
    json: IMeasureGroupStratifierComponent,
    providedInstance: MeasureGroupStratifierComponent = new MeasureGroupStratifierComponent()
  ): MeasureGroupStratifierComponent {
    const newInstance: MeasureGroupStratifierComponent = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.criteria) {
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
  
  public getTypeName(): string {
    return "MeasureGroupStratifierComponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
