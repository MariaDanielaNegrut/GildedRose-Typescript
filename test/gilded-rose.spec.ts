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

    it("Test update for special item Aged Brie", function () {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Aged Brie', 10, 10),
            new Item('Aged Brie', 10, 49),
            new Item('Aged Brie', 10, 50),
            new Item('Aged Brie', 0, 10),
            new Item('Aged Brie', 0, 49),
            new Item('Aged Brie', 0, 50),
        ]);

        const items: Item[] = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(11);
        expect(items[1].quality).to.equal(50);
        expect(items[2].quality).to.equal(50);
        expect(items[3].quality).to.equal(12);
        expect(items[4].quality).to.equal(50);
        expect(items[5].quality).to.equal(50);
    })

    it("Test update for special item Sulfuras", function () {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Sulfuras, Hand of Ragnaros', 10, 1),
            new Item('Sulfuras, Hand of Ragnaros', 0, 1),
            new Item('Sulfuras, Hand of Ragnaros', -3, 1),
        ]);

        const items: Item[] = gildedRose.updateQuality();

        items.forEach((item: Item) => {
            expect(item.quality).to.equal(1);
        })

        expect(items[0].sellIn).to.equal(10);
        expect(items[1].sellIn).to.equal(0);
        expect(items[2].sellIn).to.equal(-3);

    })

    it("Test update for special item Backstage Passes", function () {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
        ]);

        const items: Item[] = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(1);
        expect(items[1].quality).to.equal(50);
        expect(items[2].quality).to.equal(50);
        expect(items[3].quality).to.equal(2);
        expect(items[4].quality).to.equal(50);
        expect(items[5].quality).to.equal(50);
        expect(items[6].quality).to.equal(2);
        expect(items[7].quality).to.equal(50);
        expect(items[8].quality).to.equal(50);
        expect(items[9].quality).to.equal(3);
        expect(items[10].quality).to.equal(50);
        expect(items[11].quality).to.equal(50);
        expect(items[12].quality).to.equal(3);
        expect(items[13].quality).to.equal(50);
        expect(items[14].quality).to.equal(50);
        expect(items[15].quality).to.equal(0);
        expect(items[16].quality).to.equal(0);
    })

    it("Test update for special item Conjured Mana Cake", function () {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Conjured Mana Cake', 10, 3),
            new Item('Conjured Mana Cake', 10, 2),
            new Item('Conjured Mana Cake', 10, 1),
            new Item('Conjured Mana Cake', 10, 0),
            new Item('Conjured Mana Cake', 0, 5),
            new Item('Conjured Mana Cake', 0, 3),
            new Item('Conjured Mana Cake', 0, 2),
            new Item('Conjured Mana Cake', 0, 0),
            new Item('Conjured Mana Cake', -3, 1),
            new Item('Conjured Mana Cake', -3, 0),
            new Item('Conjured Mana Cake', -3, 4),
            new Item('Conjured Mana Cake', -3, 5),
        ]);

        const items: Item[] = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(1);
        expect(items[1].quality).to.equal(0);
        expect(items[2].quality).to.equal(0);
        expect(items[3].quality).to.equal(0);

        expect(items[4].quality).to.equal(1);
        expect(items[5].quality).to.equal(0);
        expect(items[6].quality).to.equal(0);
        expect(items[7].quality).to.equal(0);

        expect(items[8].quality).to.equal(0);
        expect(items[9].quality).to.equal(0);
        expect(items[10].quality).to.equal(0);
        expect(items[11].quality).to.equal(1);
    })
})