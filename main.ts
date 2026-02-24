
//%color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco{


    export enum value_level{
        /**
         * Attention greater than 35
         */
        //% block="low"
        low = 35,
        /**
         * Attention greater than 50
         */
        //% block="middle"
        middle = 50,
        /**
         * Attention greater than 65
         */
        //% block="high"
        high = 65
    }
    
    /**
     * 獲取實時專注力讀數 (0-100)
     */
    //% block="Attention Value" blockId="GetAttentionRealValue"
    export function get_Attention_Real_Value(): number {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        
        // 確保讀取到的數值在合理範圍內 (0-100)
        if (value >= 0 && value <= 100) {
            return value
        } else {
            return 0 // 若無效則回傳 0
        }
    }

    /**
    * Low:Attention greater than 35,Middle:Attention greater than 50,High:Attention greater than 65.
    */
    //% block="Attention %level" blockId="GetAttentionValue"
    export function get_Attention_Value(level:value_level):boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        
        switch (level) {
            case value_level.low:
                if (value > value_level.low)
                    return true
                else
                    return false
            case value_level.middle:
                if (value > value_level.middle)
                    return true
                else
                    return false
            case value_level.high:
                if (value > value_level.high)
                    return true
                else
                    return false
            default:
                return false
        }
    }
}
