/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  INutritionOrderOralDiet,
  NutritionOrderOralDietNutrient,
  NutritionOrderOralDietTexture,
  PrimitiveString,
  Timing,
  FieldMetadata
} from "../internal";

export class NutritionOrderOralDiet extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrder.OralDiet";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "schedule",
      fieldType: [Timing],
      isArray: true
    }, {
      fieldName: "nutrient",
      fieldType: [NutritionOrderOralDietNutrient],
      isArray: true
    }, {
      fieldName: "texture",
      fieldType: [NutritionOrderOralDietTexture],
      isArray: true
    }, {
      fieldName: "fluidConsistencyType",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "instruction",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public type?: Array<CodeableConcept>;

  public schedule?: Array<Timing>;

  public nutrient?: Array<NutritionOrderOralDietNutrient>;

  public texture?: Array<NutritionOrderOralDietTexture>;

  public fluidConsistencyType?: Array<CodeableConcept>;

  public instruction?: PrimitiveString;

  public static parse(
    json: INutritionOrderOralDiet,
    providedInstance: NutritionOrderOralDiet = new NutritionOrderOralDiet()
  ): NutritionOrderOralDiet {
    const newInstance: NutritionOrderOralDiet = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.schedule !== undefined) {
      newInstance.schedule = json.schedule.map((x) => Timing.parse(x));
    }
    if (json.nutrient !== undefined) {
      newInstance.nutrient = json.nutrient.map((x) => NutritionOrderOralDietNutrient.parse(x));
    }
    if (json.texture !== undefined) {
      newInstance.texture = json.texture.map((x) => NutritionOrderOralDietTexture.parse(x));
    }
    if (json.fluidConsistencyType !== undefined) {
      newInstance.fluidConsistencyType = json.fluidConsistencyType.map((x) => CodeableConcept.parse(x));
    }
    if (json.instruction !== undefined) {
      newInstance.instruction = PrimitiveString.parsePrimitive(json.instruction, json._instruction);
    }
    return newInstance;
  }

  public static isNutritionOrderOralDiet(input?: unknown): input is NutritionOrderOralDiet {
    const castInput = input as NutritionOrderOralDiet;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrderOralDiet";
  }

  public toJSON(): INutritionOrderOralDiet {
    const result: INutritionOrderOralDiet = super.toJSON();

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.schedule) {
      result.schedule = this.schedule.map((x) => x.toJSON());
    }

    if (this.nutrient) {
      result.nutrient = this.nutrient.map((x) => x.toJSON());
    }

    if (this.texture) {
      result.texture = this.texture.map((x) => x.toJSON());
    }

    if (this.fluidConsistencyType) {
      result.fluidConsistencyType = this.fluidConsistencyType.map((x) => x.toJSON());
    }

    if (this.instruction) {
      result.instruction = this.instruction.value;
      result._instruction = Extension.serializePrimitiveExtension(this.instruction);
    }

    return result;
  }

  public clone(): NutritionOrderOralDiet {
    return NutritionOrderOralDiet.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "NutritionOrderOralDiet";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
