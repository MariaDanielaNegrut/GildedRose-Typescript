import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Golden Master - Gilded Rose', function () {
    it('Give same values', function() {
        const gildedRose = new GildedRose([
            new Item('TestDate', 0, 10),
            new Item('TestQuality', 0, 0),
            new Item('Aged Brie', 0, 0),
            new Item('Aged Brie', 0, 50),
            new Item('Sulfuras, Hand of Ragnaros', 12, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items: Item[] = gildedRose.updateQuality();

        expect(items[0].name).to.equal("TestDate");
        expect(items[0].sellIn).to.equal(-3);
        expect(items[0].quality).to.equal(4);

        expect(items[1].name).to.equal("TestQuality");
        expect(items[1].sellIn).to.equal(-3);
        expect(items[1].quality).to.equal(0);

        expect(items[2].name).to.equal("Aged Brie");
        expect(items[2].sellIn).to.equal(-3);
        expect(items[2].quality).to.equal(6);

        expect(items[3].name).to.equal("Aged Brie");
        expect(items[3].sellIn).to.equal(-3);
        expect(items[3].quality).to.equal(50);

        expect(items[4].name).to.equal("Sulfuras, Hand of Ragnaros");
        expect(items[4].sellIn).to.equal(12);
        expect(items[4].quality).to.equal(50);

        expect(items[5].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[5].sellIn).to.equal(7);
        expect(items[5].quality).to.equal(6);

        expect(items[6].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[6].sellIn).to.equal(6);
        expect(items[6].quality).to.equal(6);

        expect(items[7].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[7].sellIn).to.equal(2);
        expect(items[7].quality).to.equal(9);

        expect(items[8].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[8].sellIn).to.equal(1);
        expect(items[8].quality).to.equal(9);

        expect(items[9].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[9].sellIn).to.equal(-3);
        expect(items[9].quality).to.equal(0);
    });

});

describe('Unit tests', function () {
    it("Should decrease x2", function () {
        const gildedRose: GildedRose = new GildedRose(
            [new Item('TestDate', 0, 10),]
        );

        let items: Item[] = gildedRose.updateQuality();

        // Test for: name, sellIn
        expect(items[0].name).to.equal('TestDate');
        expect(items[0].sellIn).to.equal(-1);

        // Test for expected quality
        expect(items[0].quality).to.equal(8);

        // Repeat
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);

    });

    it("Test quality decrease for normal items", function () {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Produce', 10, 10),
            new Item('Produce', 10, 1),
            new Item('Produce', 10, 0),
            new Item('Produce', 0, 0),
            new Item('Produce', 0, 10),
            new Item('Produce', 0, 1),
        ]);

        let items: Item[] = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(9);
        expect(items[1].quality).to.equal(0);
        expect(items[2].quality).to.equal(0);
        expect(items[3].quality).to.equal(0);
        expect(items[4].quality).to.equal(8);
        expect(items[5].quality).to.equal(0);

        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(8);
        expect(items[1].quality).to.equal(0);
        expect(items[2].quality).to.equal(0);
        expect(items[3].quality).to.equal(0);
        expect(items[4].quality).to.equal(6);
        expect(items[5].quality).to.equal(0);
    });
})