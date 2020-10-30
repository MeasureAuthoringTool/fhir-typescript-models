/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITaskRestriction,
  Period,
  PrimitivePositiveInt,
  Reference,
  FieldMetadata
} from "../internal";

export class TaskRestriction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Task.Restriction";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "repetitions",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }, {
      fieldName: "period",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "recipient",
      fieldType: [Reference],
      isArray: true
    }];
  }

  public repetitions?: PrimitivePositiveInt;

  public period?: Period;

  public recipient?: Array<Reference>;

  public static parse(
    json: ITaskRestriction,
    providedInstance: TaskRestriction = new TaskRestriction()
  ): TaskRestriction {
    const newInstance: TaskRestriction = BackboneElement.parse(json, providedInstance);
  
    if (json.repetitions !== undefined) {
      newInstance.repetitions = PrimitivePositiveInt.parsePrimitive(json.repetitions, json._repetitions);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.recipient !== undefined) {
      newInstance.recipient = json.recipient.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isTaskRestriction(input?: unknown): input is TaskRestriction {
    const castInput = input as TaskRestriction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TaskRestriction";
  }

  public toJSON(): ITaskRestriction {
    const result: ITaskRestriction = super.toJSON();

    if (this.repetitions) {
      result.repetitions = this.repetitions.value;
      result._repetitions = Extension.serializePrimitiveExtension(this.repetitions);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.recipient) {
      result.recipient = this.recipient.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): TaskRestriction {
    return TaskRestriction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TaskRestriction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
