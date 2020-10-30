/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IChargeItemPerformer,
  Reference,
  FieldMetadata
} from "../internal";

export class ChargeItemPerformer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItem.Performer";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "function",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "actor",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public function?: CodeableConcept;

  public actor?: Reference;

  public static parse(
    json: IChargeItemPerformer,
    providedInstance: ChargeItemPerformer = new ChargeItemPerformer()
  ): ChargeItemPerformer {
    const newInstance: ChargeItemPerformer = BackboneElement.parse(json, providedInstance);
  
    if (json.function !== undefined) {
      newInstance.function = CodeableConcept.parse(json.function);
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    return newInstance;
  }

  public static isChargeItemPerformer(input?: unknown): input is ChargeItemPerformer {
    const castInput = input as ChargeItemPerformer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemPerformer";
  }

  public toJSON(): IChargeItemPerformer {
    const result: IChargeItemPerformer = super.toJSON();

    if (this.function) {
      result.function = this.function.toJSON();
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    return result;
  }

  public clone(): ChargeItemPerformer {
    return ChargeItemPerformer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ChargeItemPerformer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
