/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  INutritiionOrderIntent,
  INutritionOrderEnteralFormula,
  INutritionOrderOralDiet,
  INutritionOrderStatus,
  INutritionOrderSupplement,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface INutritionOrder extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  instantiates?: Array<IPrimitiveUri>;
  _instantiates?: Array<IElement | null>;

  status?: INutritionOrderStatus;
  _status?: IElement;

  intent?: INutritiionOrderIntent;
  _intent?: IElement;

  patient?: IReference;

  encounter?: IReference;

  dateTime?: IPrimitiveDateTime;
  _dateTime?: IElement;

  orderer?: IReference;

  allergyIntolerance?: Array<IReference>;

  foodPreferenceModifier?: Array<ICodeableConcept>;

  excludeFoodModifier?: Array<ICodeableConcept>;

  oralDiet?: INutritionOrderOralDiet;

  supplement?: Array<INutritionOrderSupplement>;

  enteralFormula?: INutritionOrderEnteralFormula;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
